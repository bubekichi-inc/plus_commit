import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { Comparison } from "@/components/sections/Comparison"
import { Pricing } from "@/components/sections/Pricing"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Comparison />
                <Pricing />
            </main>
            <Footer />
        </div>
    )
}
