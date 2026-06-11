import SectionWrapper from '../components/SectionWrapper';
import AnimatedText from '../components/AnimatedText';
// Product grid removed per request — images/videos replaced by placeholder text

export default function ProductShowcase() {
  return (
    <SectionWrapper id="our-products" className="section-space bg-white">
      <div className="section-shell">
        <div className="w-full">
          <div className="w-full text-justify">
            <AnimatedText>
              <p className="section-kicker">Products and Services offered</p>
              <h2 className="mt-4 section-heading">Signature pieces with a modern point of view.</h2>
              <p className="fluid-body mt-6 w-full text-justify">
                Muhurtha Divine Works offers a complete range of temple-focused creations, blending
                traditional craftsmanship with precise execution. Our services include the design and
                fabrication of golden, silver, and wooden chariots (rathams), intricately crafted
                temple doors, and finely detailed idols and decorative statues. We also create
                vahanams and essential temple assets, ensuring every piece reflects the spiritual
                significance and architectural harmony of the space.
              </p>
              <p className="fluid-body mt-6 w-full text-justify">Our key offerings include:</p>
              <ul className="fluid-body mt-4 list-disc space-y-2 pl-6 text-justify">
                <li>Custom-designed golden, silver, and wooden rathams</li>
                <li>Temple doors crafted in gold, silver, and premium wood</li>
                <li>Idols, utsava murtis, and decorative statues</li>
                <li>Vahanams and supporting temple assets</li>
                <li>Temple jewellery, crowns, and ornamental elements</li>
                <li>Gold-plated flagstaffs and temple towers</li>
              </ul>
              <p className="fluid-body mt-6 w-full text-justify">
                We also specialize in the restoration and enhancement of existing temple assets,
                preserving their heritage while elevating their grandeur. With a strong focus on
                quality materials, fine detailing, and timely project execution, Muhurtha Divine
                Works delivers reliable, end-to-end solutions tailored to the unique vision and
                requirements of every temple.
              </p>
            </AnimatedText>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}