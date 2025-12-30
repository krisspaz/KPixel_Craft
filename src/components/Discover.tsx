import { ArrowRight } from "lucide-react";

export const Discover = () => {
    const collections = [
        { name: "Doodles", floor: "2.4 ETH", image: "https://images.unsplash.com/photo-1620321023374-d1a68fddadb3?w=500&h=500&q=80" },
        { name: "Azuki", floor: "5.1 ETH", image: "https://images.unsplash.com/photo-1633512068804-0985c5d2b7d5?w=500&h=500&q=80" },
        { name: "Bored Ape", floor: "12.8 ETH", image: "https://images.unsplash.com/photo-1569424606622-5555433604d5?w=500&h=500&q=80" },
        { name: "Clone X", floor: "1.9 ETH", image: "https://images.unsplash.com/photo-1599522316683-ccb8255953bd?w=500&h=500&q=80" },
    ];

    return (
        <section className="py-24 bg-nft-black text-nft-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase">
                        Discover <span className="text-nft-yellow">Collections</span>
                    </h2>
                    <a href="#" className="hidden md:flex items-center gap-2 font-bold hover:text-nft-yellow transition-colors">
                        View All <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {collections.map((item, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="px-6 py-2 bg-nft-yellow text-nft-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <p className="text-gray-400 font-medium">Floor: <span className="text-nft-white">{item.floor}</span></p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 font-bold hover:text-nft-yellow transition-colors">
                        View All <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};
