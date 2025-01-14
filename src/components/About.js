import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const About = () => {
    const items = [
        {
            title: "Profissionalismo",
            description: "Em nosso sucesso profissional não obtemos o que merecemos, mas sim o resultado da qualidade daquilo que entregamos ao nosso cliente."
        },
        {
            title: "Inovação",
            description: "Buscamos constantemente novas ideias e soluções para atender às necessidades dos nossos clientes de forma criativa e eficiente."
        },
        {
            title: "Comprometimento",
            description: "Estamos comprometidos em entregar resultados excepcionais e superar as expectativas dos nossos clientes."
        }
    ];

    return (
        <Parallax speed={5}>
            <div id='about' className="relative flex flex-col min-h-screen p-8 md:p-16 lg:p-24 mt-28">
                <div className="relative z-10">
                    <h1 className="text-center text-3xl md:text-5xl font-bold text-bit-bee-yellow mb-10">Sobre Nós</h1>
                    <p className="text-center text-lg md:text-3xl font-bold text-bit-bee-yellow mb-10">
                        Equipe de Engenheiros de Software altamente qualificada
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-700 bg-opacity-10 p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-500 hover:bg-opacity-20"
                            >
                                <div className="relative w-full" style={{ height: "300px" }}>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
                                        <h2 className="text-2xl text-bit-bee-yellow font-bold mb-4 text-center">{item.title}</h2>
                                        <p className="text-lg text-white leading-relaxed text-center">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default About;
