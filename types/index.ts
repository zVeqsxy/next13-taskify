import {
  Board,
  List,
  Card,
  ACTION,
  ENTITY_TYPE,
  AuditLog,
} from "@prisma/client";

export interface childrenProps {
  children: React.ReactNode;
}

export interface SidebarProps {
  storageKey?: string;
}

export interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export interface BoardProps {
  title: string;
  id: string;
}

export interface FormInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[]> | undefined;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}

export interface FormErrorsProps {
  id: string;
  errors?: Record<string, string[]> | undefined;
}

export interface FormSubmitProps {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "primary"
    | "secondary"
    | "ghost"
    | "link";
}

export interface HinProps {
  children?: React.ReactNode;
  description?: string;
  side?: "left" | "right" | "top" | "bottom";
  sideOffset?: number;
}

export interface FormPopoverProps {
  children?: React.ReactNode;
  align?: "start" | "center" | "end";
  side?: "left" | "right" | "top" | "bottom";
  sideOffset?: number;
}

export interface FormPickerProps {
  id: string;
  errors?: Record<string, string[]> | undefined;
}

export interface BoardNavbarProps {
  data: Board;
}

export interface BoardTitleFormProps {
  data: Board;
}

export interface BoardOptionsProps {
  id: string;
}

export interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

export interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

export interface ListWrapperProps {
  children: React.ReactNode;
}

export interface ListItemProps {
  data: ListWithCards;
  index: number;
}

export interface ListHeaderProps {
  data: List;
  onAddCard: () => void;
}

export interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}

export interface CardFormProps {
  listId: string;
  enableEditing: () => void;
  disableEditing: () => void;
  isEditing: boolean;
}

export interface FormTextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[]> | undefined;
  className?: string;
  onBlur?: () => void;
  onClick?: () => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement> | undefined;
  defaultValue?: string;
}

export interface CardItemProps {
  data: Card;
  index: number;
}

export interface HeaderProps {
  data: CardWithList;
}

export interface DescriptionProps {
  data: CardWithList;
}

export interface ActionsProps {
  data: CardWithList;
}

export interface Props {
  entityId: string;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}

export interface ActivityProps {
  items: AuditLog[];
}

export interface ActivityItemProps {
  data: AuditLog;
}

export interface InfoProps {
  isPro: boolean;
}

export interface SubscriptionButtonProps {
  isPro: boolean;
}

// Types ->

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

export type MobileSidebarStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string;
};

export type ListWithCards = List & { cards: Card[] };
export type CardWithList = Card & { list: List };

export type CardModalStore = {
  id?: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export type ProModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};
