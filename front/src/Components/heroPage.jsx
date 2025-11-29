import { useState, useEffect } from "react";

export default function HeroPage() {
    const [imageUrls, setImageUrls] = useState([]);
    const [overlayProgress, setOverlayProgress] = useState(0);

    // 🎯 SCROLL SMOOTH PROGRESS (bidirectionnel)
    useEffect(() => {
        const maxScroll = 250;
        const handleScroll = () => {
            let scroll = window.scrollY;
            const p = Math.min(Math.max(scroll / maxScroll, 0), 1);
            setOverlayProgress(p);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🎯 LOAD IMAGES
    useEffect(() => {
        async function loadImages() {
            const files = import.meta.glob("../assets/heroPage/*.{png,jpg,jpeg,webp}");
            const loadedImages = await Promise.all(
                Object.values(files).map(async (importFn) => {
                    const module = await importFn();
                    return module.default;
                })
            );
            setImageUrls(loadedImages);
        }

        loadImages();
    }, []);

    return (
        <>

            <div className="w-screen h-screen flex">
                {/* 🟥 Colonne gauche */}
                <div className="w-1/3 h-full bg-black">
                    <img
                        src={imageUrls[3]}
                        alt="left"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* 🟦 Colonne droite */}
                <div className="w-2/3 h-full flex flex-col relative overflow-hidden">
                    {/* 🌤️ IMAGE DU CIEL */}
                    <div
                        className="absolute top-0 left-0 w-full bg-cover bg-center flex items-center justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                            backgroundImage: `url(${imageUrls[1]})`,
                            height: `${33 + overlayProgress * 67}vh`,
                            transform: `scale(${1 + overlayProgress * 0.12})`,
                            zIndex: 10,
                        }}
                    >
                        <img src="/logo_red.png" alt="logo"  className="w-40 h-30"/>
                        {/* <h1 className="text-red-700 text-6xl hidden md:block">Maison sow</h1> */}
                    </div>

                    {/* Grille d'images */}
                    <div className="flex-[3] flex overflow-hidden mt-[33vh]">
                        {/* Colonne 1 */}
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1 overflow-hidden">
                                <img src={imageUrls[10]} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 bg-orange-500 overflow-hidden">
                                <img src={imageUrls[12]} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Colonne 2 */}
                        <div className="flex-1 flex flex-col">
    
    {/* Ligne 1 */}
                    <div className="flex-1 flex">
                        <div className="hidden md:block flex-1 overflow-hidden">
                            <img src={imageUrls[18]} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <img src={imageUrls[7]} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Ligne 2 */}
                    <div className="flex-1 flex overflow-hidden">
                     
                        <div className="flex-1 overflow-hidden">
                            <img src={imageUrls[9]} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Ligne 3 → flex-1 pour éviter l’écrasement */}
                    <div className="flex-1 overflow-hidden">
                        <img src={imageUrls[17]} className="w-full h-full object-cover" />
                    </div>
                </div>


                        {/* Colonne 3 */}
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1 overflow-hidden">
                                <img src={imageUrls[6]} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-[3] overflow-hidden">
                                <img src={imageUrls[8]} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
