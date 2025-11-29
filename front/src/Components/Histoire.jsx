import React from 'react';
import cuisine from '../assets/histoire/cuisine.jpg';
import red_pepper from "../assets/histoire/red_peper.jpg"
import pepper from "../assets/histoire/pepper.jpeg"
import hand from "../assets/histoire/photo (47).jpg"


export default function Histoire() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-20 bg-[#2a2c68] min-h-screen">

            {/* IMAGE GRANDE GAUCHE */}
            <div className="flex flex-col gap-6 justify-center items-center">
                <div className="bg-white rounded-xl shadow-md p-6 flex justify-center items-center">
                    <img 
                        src={cuisine}
                        className="w-full max-w-[500px] h-auto object-cover rounded-lg"
                    />
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
                        dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
                        euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
                        non fermentum diam nisl sit amet erat.
                    </p>
                </div>
            </div>

            {/* COLONNE DROITE */}
            <div className="flex flex-col gap-6">

                {/* Texte haut */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
                        dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
                        euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
                        non fermentum diam nisl sit amet erat.
                    </p>
                </div>

                {/* Deux images + texte bas */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-6">

                    <div className="flex gap-4">
                        <img 
                            src={red_pepper}
                            className="w-1/2 h-[150px] object-cover rounded-lg"
                        />
                        <img 
                            src={pepper}
                            className="w-1/2 h-[150px] object-cover rounded-lg"
                        />
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
                        dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
                        euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
                        non fermentum diam nisl sit amet erat.
                    </p>

                </div>

                  <div className="bg-white rounded-xl shadow-md p-6 flex justify-center">
                    <img 
                        src={hand} 
                        className="w-full max-w-[500px] h-[120px] object-cover rounded-lg"

                    />
                </div>

            </div>
        </div>
    );
}
