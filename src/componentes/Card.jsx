import React from 'react';

function Card({
    id,
    image,
    name,
    price,
    description,
    stock,
    category,
    amount,
}) {
    return (
        <div className="card col-3">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="card-price">${price}</p>
            <p>{description}</p>
            <p>Stock: {stock}</p>
            <p>Categoría: {category}</p>
            <div className="button">
                <button disabled={stock === 0}>
                    {stock === 0 ? 'Sin stock' : 'Comprar'}
                </button>
            </div>
        </div>
    );
}

export default Card;

