import { LoadingDots } from "@/components/custom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";

type ComboBoxProps<T> = {
  options: T[];
  query: string;
  onChange: (value: string) => void;
  onSelect: (item: T) => void;
  renderOption: (item: T) => React.ReactNode;
  getOptionKey: (item: T) => string | number;
  getOptionLabel: (item: T) => string;
  placeholder?: string;
  label?: string;
  loading?: boolean;
  error?: string;
};

export const ComboBox = <T,>({
  options,
  query,
  onChange,
  onSelect,
  renderOption,
  getOptionKey,
  getOptionLabel,
  placeholder = "Search...",
  label,
  loading,
  error,
}: ComboBoxProps<T>) => {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const listRef = useRef<HTMLUListElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || !options.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : options.length - 1,
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && options[highlightedIndex]) {
          handleSelect(options[highlightedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
    }
  };

  const handleSelect = (item: T) => {
    onSelect(item);
    onChange(getOptionLabel(item));
    setOpen(false);
    setHighlightedIndex(-1);
  };

  useEffect(() => {
    if (listRef.current && highlightedIndex >= 0) {
      const activeItem = listRef.current.children[
        highlightedIndex
      ] as HTMLElement;
      activeItem?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  return (
    <div className="relative w-full">
      {label && (
        <Label htmlFor="combobox-input" className="mb-3">
          {label}
        </Label>
      )}

      <Input
        id="combobox-input"
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
          setHighlightedIndex(-1);
        }}
        onKeyDown={handleKeyDown}
        onBlur={(e) => {
          // Only close if user didn’t click an option
          if (!listRef.current?.contains(e.relatedTarget as Node)) {
            setOpen(false);
          }
        }}
        aria-expanded={open}
        aria-controls="combobox-list"
        className="bg-white"
      />

      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
          {loading && <LoadingDots />}
          {error && (
            <p className="text-start p-2 text-sm text-red-600">{error}</p>
          )}

          <ul id="combobox-list" ref={listRef}>
            {options.map((item, index) => (
              <li key={getOptionKey(item)}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    index === highlightedIndex
                      ? "bg-fuchsia-100 text-fuchsia-800"
                      : "hover:bg-fuchsia-50 hover:text-fuchsia-800"
                  }`}
                  onClick={() => handleSelect(item)}
                >
                  {renderOption(item)}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
