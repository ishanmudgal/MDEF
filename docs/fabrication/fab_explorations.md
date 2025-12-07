# **Explorations**

Explorations done within and outside of the fabrication course.

<!-- ## 3d Printing -->

## Arduino

??? tip "Rainbow colour experiment"

    I tried making a rainbow cycle experiment with the LED strip given to us as a part of the pre-course. I also tried adding a transluscent material as a lamp-shade experiment to see how the colour diffuses.

    !!! note inline end "Test"

        ![](../images/fab_pics/rainbow_pic.jpg)

    !!! abstract "Code"

        I used the Arduino IDE to create a rainbow cycle. After many failed attempts i finally created one that works:

        ``` arduino


        #include <Adafruit_NeoPixel.h>

        #define PIN        17
        #define NUMPIXELS 10
        Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
        #define DELAYVAL 10 // Time (in milliseconds) to pause between pixels

        void setup() {
        strip.begin();
        strip.show();
        strip.setBrightness(20);
        }

        void loop() {
        for (long hue = 0; hue<65536; hue +=250)  {
            for (int i=0; i<strip.numPixels(); i++) {
            int modHue = hue + (i*65536/strip.numPixels());
            }

            strip.rainbow(modHue);
            strip.show();
        }
        ```

<!--???
    ???
    ???
    ??? -->

## Biomaterials

??? tip "Resin Explorations during the Fundamentals for Future Makers Course"

    RESIN BASED BIOMATERIAL EXPERIMENT

    ??? abstract "Details"

        Exploring Biomaterials was a great hands-on experience. It felt like a cooking class. I loved the variety of materials, their qualities, and the results. I tried getting some amount of transparency. The pine resin was fragile so I realised I had to add fillers, or more wax, which would kill the transparency either way. I decided to add fillers but in a limited quantity. I also chose the filler with larger size so that there would be gaps to bring my transluscent effect to the material. The recipe and process are provided alongside.

        This material would make grest lamps if thinner, although it would be more fragile. Could also be used to create interesting lighting effects for sets in stop motion or claymation.

        ![](../images/fab_pics/Result.jpg)

    ??? note "Images"

        ![](../images/fab_pics/Comparison.jpg)
        ![](../images/fab_pics/Resin.jpg)
        ![](../images/fab_pics/Resin_process.jpg)

    ??? example "RECIPE"

        **Ingredients**

        * 60% pine resin
        * 35% filler (orange peel mix + dried avocado seeds)
        * 5% casting wax
        * Alcohol (solvent for pine resin)
        * Diluted Indigo dye (few drops)

        **Process**

        1. Crush the pine resin to chunks to make it easier to melt.
        2. Heat it in a pot while adding sufficient alcohol. Cover until entirely dissolved.
        3. Add casting wax flakes to the mix. (I used half a handfull, and the result was a bit delicate. Add more for strength, at the cost of transparency)
        4. Crush the dried avocado seeds and mix with the dried orange peels. Mix it in.
        5. Pour the mix into any kind of mould. I used an embroidery ring with butter paper to form the base and frame.







    <!-- ## Laser-cutting -->
