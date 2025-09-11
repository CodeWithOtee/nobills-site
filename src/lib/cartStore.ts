import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  removeItem: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  subtotal: number;
};

export const useCartStore = create<CartState>()(
  typeof window !== "undefined"
    ? persist<CartState>(
        (set, get) => ({
          items: [],
          addItem: (item) => {
            set((state) => {
              const existing = state.items.find((i) => i.slug === item.slug);
              if (existing) {
                return {
                  items: state.items.map((i) =>
                    i.slug === item.slug
                      ? { ...i, qty: i.qty + (item.qty ?? 1) }
                      : i
                  ),
                };
              }
              return {
                items: [
                  ...state.items,
                  { ...item, qty: item.qty ?? 1 },
                ],
              };
            });
          },
          removeItem: (slug) =>
            set((state) => ({
              items: state.items.filter((i) => i.slug !== slug),
            })),
          setQty: (slug, qty) =>
            set((state) => ({
              items: state.items.map((i) =>
                i.slug === slug ? { ...i, qty } : i
              ),
            })),
          clear: () => set({ items: [] }),
          get subtotal() {
            return get().items.reduce(
              (sum, i) => sum + i.price * i.qty,
              0
            );
          },
        }),
        {
          name: "nobills-cart",
          skipHydration: true,
        }
      )
    : () => ({
        items: [],
        addItem: () => {},
        removeItem: () => {},
        setQty: () => {},
        clear: () => {},
        subtotal: 0,
      })
);
