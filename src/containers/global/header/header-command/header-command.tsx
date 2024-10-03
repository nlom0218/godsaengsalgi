import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandDialog,
} from '@/components/command';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORY_STRUCTURE } from '@/constants/category';

export function HeaderCommand() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'p' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div className="ml-auto">
      <div>
        <p className="text-xs text-muted-foreground">페이지 검색 ⌘P</p>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="페이지를 검색하세요." />
        <CommandList>
          <CommandEmpty>검색된 페이지가 없습니다.</CommandEmpty>
          {Object.entries(CATEGORY_STRUCTURE).map(
            ([largeCategory, { href: largeHref, name, middleCategories }]) => (
              <Fragment key={largeCategory}>
                <CommandGroup heading={name}>
                  {middleCategories.map(({ name, href, Icon }) => (
                    <CommandItem
                      key={name}
                      className="cursor-pointer flex gap-2"
                      onSelect={() => {
                        router.push(`${largeHref}${href}`);
                        setOpen(false);
                      }}
                    >
                      <Icon />
                      <span>{name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </Fragment>
            )
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
