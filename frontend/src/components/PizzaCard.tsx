import { useCart } from '../context/useCart'
export interface Pizza {
  name: string
  badge: string
  price: number
  image: string
  imageHeight: number
  description: string
}

interface PizzaCardProps {
  pizza: Pizza
  index: number
}

function PizzaCard({ pizza, index }: PizzaCardProps) {
  const { addItem } = useCart()
  return (
    <article aria-labelledby={`pizza-${index}`} className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_32px_rgb(29_38_27_/_0.06)]">
      <div className="relative aspect-[0.88] overflow-hidden">
        <img
          alt={`Pizza ${pizza.name}`}
          className="h-full w-full object-cover"
          height={pizza.imageHeight}
          loading="lazy"
          src={pizza.image}
          width={900}
        />
        <span className="absolute left-5 top-5 rounded-full bg-[#F7F3EA] px-3 py-2 text-[0.6rem] font-bold uppercase tracking-widest">{pizza.badge}</span>
        <span className="absolute bottom-5 right-5 flex h-16 w-16 -rotate-12 items-center justify-center rounded-full bg-[#D5F368] font-[Impact,'Arial_Narrow',sans-serif] text-xl">{pizza.price} zł</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="flex items-center gap-3" id={`pizza-${index}`}>
          <span className="text-xs font-medium text-[#777C70]">{String(index + 1).padStart(2, '0')}</span>
          <span className="font-[Impact,'Arial_Narrow',sans-serif] text-3xl tracking-tight">{pizza.name}</span>
        </h3>
        <p className="mb-6 mt-3 text-sm leading-relaxed text-[#686C62]">{pizza.description}</p>
        <button
          aria-label={`Dodaj ${pizza.name} do koszyka`}
          className="mt-auto flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[#1D261B]/55 px-3 text-xs uppercase tracking-[0.12em] disabled:cursor-not-allowed disabled:text-[#686C62]"
          onClick={() => addItem(pizza.name)}
          type="button"
        >
          <span aria-hidden="true" className="text-lg">+</span>
          Dodaj do koszyka
        </button>
      </div>
    </article>
  )
}

export default PizzaCard
