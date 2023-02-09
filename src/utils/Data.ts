interface LocationType {
  address: string;
}
interface OpenedHoursType {
  openAt: Date;
  closeAt: Date;
}
interface OpenedDaysType {
  monday: OpenedHoursType;
  tuesday: OpenedHoursType;
  wednesday: OpenedHoursType;
  thursday: OpenedHoursType;
  friday: OpenedHoursType;
  saturday: OpenedHoursType;
  sunday: OpenedHoursType;
}
interface EntreeType {
  name: string;
  price: number;
  ingredients: string[];
}
interface PlatType {
  name: string;
  price: number;
  ingredients: string[];
}
interface DessertType {
  name: string;
  price: number;
  ingredients: string[];
}
interface BoissonType {
  name: string;
  price: number;
  ingredients: string[];
}
interface MenuType {
  entrees: EntreeType[];
  plats: PlatType[];
  desserts: DessertType[];
  boissons: BoissonType[];
}
interface DataType {
  locations: LocationType[];
  openedHours: OpenedDaysType[];
  menu: MenuType;
}

export const Data: DataType = {
  locations: [],
  openedHours: [],
  menu: {
    entrees: [],
    plats: [],
    desserts: [],
    boissons: [],
  },
};

export {};
