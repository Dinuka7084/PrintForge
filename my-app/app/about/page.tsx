import Image from "next/image";

export default function About() {
   return (
      <section>
        {/*upper container*/}
        <div>
            {/*Left content*/}
            <div>
                <Image 
                    src="/hero-image.png"
                    alt="About Us"
                    width={800}
                    height={600}
                    className="object-contain"
                />
            </div>
            {/*Right content*/}
            <div>
                <p>ABOUT PRINTFORGE</p>
                <h2>Empowering makers worldwide</h2>
                <p>Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                <p>Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
            </div>
        </div>
        {/*lower container*/}
        <div>
            {/*lower horizontal container*/}
            <div>

            </div>
            {/*lower vertical container*/}
            <div>

            </div>
        </div>
      </section>
   );
}