import { Zap, Shield, Globe } from "lucide-react";

export const InformationSection = () => {
    return (
        <section className="py-24 bg-nft-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-16 max-w-3xl mx-auto leading-tight">
                    THE PLATFORM FOR THE <br />
                    <span className="text-nft-yellow bg-nft-black px-2 py-1">NEXT GENERATION</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <Zap className="w-10 h-10 text-nft-black" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Gas-Free Trading</h3>
                        <p className="text-gray-600 font-medium px-8">
                            Experience seamless trading without the burden of high gas fees on our optimized layout.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <Shield className="w-10 h-10 text-nft-black" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Secure Identity</h3>
                        <p className="text-gray-600 font-medium px-8">
                            Your profile is verified on-chain, ensuring authentic interactions and ownership.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <Globe className="w-10 h-10 text-nft-black" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Multi-Chain Support</h3>
                        <p className="text-gray-600 font-medium px-8">
                            Connect wallets from Ethereum, Solana, and more to view all your assets in one place.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
