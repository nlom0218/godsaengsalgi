'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/tabs';
import { H1 } from '@/components/typography';
import { CATEGORY_STRUCTURE } from '@/constants/category';
import { usePathname, useRouter } from 'next/navigation';

export function Navigator() {
  const router = useRouter();
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, firstSegment, secondSegment] = pathname.split('/');

  if (firstSegment === '') {
    return;
  }

  const category = CATEGORY_STRUCTURE[firstSegment];
  const defaultValue =
    category.middleCategories.find((category) => {
      return category.href.substring(1) === secondSegment;
    })?.name ?? 'overview';

  return (
    <div className="flex gap-4 justify-between">
      <H1>{category.name}</H1>
      <Tabs defaultValue={defaultValue} className="w-fit">
        <TabsList className="flex gap-1 bg-muted">
          <TabsTrigger
            value="overview"
            onClick={() => router.push(`${category.href}`)}
          >
            Overview
          </TabsTrigger>
          {category.middleCategories.map(({ href, name }) => (
            <TabsTrigger
              key={name}
              value={name}
              onClick={() => router.push(`${category.href}${href}`)}
            >
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
