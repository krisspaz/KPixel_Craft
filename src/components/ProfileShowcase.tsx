import { BadgeCheck, Heart, Share2, MoreHorizontal } from "lucide-react";

export const ProfileShowcase = () => {
    return (
        <section className="py-24 bg-nft-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                {/* Left - Text */}
                <div className="w-full md:w-1/3">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        WHAT YOU <br />
                        CAN DO WITH <br />
                        AN <span className="text-nft-yellow bg-nft-black px-2 py-1">NFT</span> PROFILE
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Display your NFTs, showcase your social capital, and connect with other collectors in a unified Web3 identity.
                    </p>
                    <ul className="space-y-4 font-bold text-lg">
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                            Aggregate all your wallets
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                            Showcase your gallery
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                            Socialize with community
                        </li>
                    </ul>
                </div>

                {/* Right - Mockup */}
                <div className="w-full md:w-2/3 relative">
                    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 max-w-2xl mx-auto transform hover:-translate-y-2 transition-transform duration-500">
                        {/* Cover Image */}
                        <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 relative">
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="px-8 pb-8 relative">
                            <div className="absolute -top-16 left-8">
                                <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&q=80" alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <div className="mt-20 flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-bold flex items-center gap-2">
                                        Ben Smith <BadgeCheck className="w-6 h-6 text-blue-500 fill-current" />
                                    </h3>
                                    <p className="text-gray-500 font-medium">@bensmith • 0x84...92a1</p>
                                </div>
                                <button className="px-6 py-2 bg-nft-black text-nft-white font-bold rounded-full hover:bg-nft-yellow hover:text-nft-black transition-colors">
                                    Follow
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-8 mt-6 py-6 border-t border-b border-gray-100">
                                <div className="text-center">
                                    <p className="text-2xl font-black">1.2k</p>
                                    <p className="text-sm text-gray-500 text-xs font-semibold uppercase tracking-wider">Followers</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-black">849</p>
                                    <p className="text-sm text-gray-500 text-xs font-semibold uppercase tracking-wider">Following</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-black">42</p>
                                    <p className="text-sm text-gray-500 text-xs font-semibold uppercase tracking-wider">Collections</p>
                                </div>
                            </div>

                            {/* Gallery Grid */}
                            <div className="mt-8 grid grid-cols-3 gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="aspect-square rounded-xl bg-gray-100 overflow-hidden group cursor-pointer relative">
                                        <img
                                            src={`https://images.unsplash.com/photo-${i === 1 ? '1620321023374-d1a68fddadb3' : i === 2 ? '1633512068804-0985c5d2b7d5' : '1569424606622-5555433604d5'}?w=300&h=300&q=80`}
                                            alt="NFT"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <Heart className="text-white fill-white" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
