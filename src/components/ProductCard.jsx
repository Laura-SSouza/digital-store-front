const ProductCard = ({ image, name, price, priceDiscount }) => {
    const formatPrice = (value) =>
        value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    
  return (
    
    <div className="flex flex-col gap-2">
        <img src={image} alt={name} className="w-73 h-80.25" />
        {/* isso eh a categoria na verdade
        <p className="text-xs text-light-gray font-bold">{name}</p> */}
        <p className="text-2xl text-dark-gray-2">{name}</p>

        <div className="flex gap-3">
            <p className={`text-2xl ${priceDiscount ? "line-through text-light-gray" : "text-dark-gray font-bold"}`}>
                {formatPrice(price)}
            </p>
            {priceDiscount && <p className="text-2xl text-dark-gray font-bold">{formatPrice(priceDiscount)}</p>}
        </div>
    </div>
  )
}

export default ProductCard