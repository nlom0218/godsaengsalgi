import {
  BookIcon,
  CircleDollarSignIcon,
  DumbbellIcon,
  PiggyBankIcon,
  WalletIcon,
} from 'lucide-react';
import { ElementType } from 'react';

export const LARGE_CATEGORIES = ['자산 관리', '자기 관리'] as const;
export const MIDDLE_CATEGORIES = [
  '가계부',
  '고정 지출',
  '주식',
  '운동',
  '독서',
];

export const CATEGORY_STRUCTURE: Record<
  (typeof LARGE_CATEGORIES)[number],
  {
    href: string;
    middleCategories: {
      name: (typeof MIDDLE_CATEGORIES)[number];
      href: string;
      Icon: ElementType;
    }[];
  }
> = {
  '자산 관리': {
    href: '/finance',
    middleCategories: [
      {
        name: '가계부',
        href: '/budget',
        Icon: WalletIcon,
      },
      {
        name: '고정 지출',
        href: '/fixed-expenses',
        Icon: CircleDollarSignIcon,
      },
      {
        name: '주식',
        href: '/stocks',
        Icon: PiggyBankIcon,
      },
    ],
  },
  '자기 관리': {
    href: '/self-management',
    middleCategories: [
      {
        name: '운동',
        href: '/exercise',
        Icon: DumbbellIcon,
      },
      {
        name: '독서',
        href: '/reading',
        Icon: BookIcon,
      },
    ],
  },
};
