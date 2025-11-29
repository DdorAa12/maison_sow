import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";


export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
            async function loadImages() {
                const files = import.meta.glob("../assets/products/*.{png,jpg,jpeg,webp}");
                const loadedImages = await Promise.all(
                    Object.values(files).map(async (importFn) => {
                        const module = await importFn();
                        return module.default;
                    })
                );
                setProducts(loadedImages);
            }
    
            loadImages();
        }, []);
    
    return (
        <section className="w-full min-h-[100vh] bg-[#00472e] px-10 py-10">

            <h2 className="text-5xl font-bold mb-10 text-red-800">
                Nos Produits
            </h2>

            <p className="text-xl text-red-100 max-w-3xl mb-16">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((imageUrl, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl shadow-md flex  overflow-hidden p-4 h-64 relative bg-cover bg-center"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    >
                        <FontAwesomeIcon icon={faShoppingBag} className="text-4xl text-red-900" />
                    </div>
                ))}
            </div>

        </section>
    );
}
