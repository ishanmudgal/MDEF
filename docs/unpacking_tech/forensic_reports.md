# Forensic Reports & Inventory

The links for the forensic reports are given below. You can see a glimpse provided with each link. Click the link to see more.

**MAIN FORENSIC REPORT**

https://hackmd.io/VbZAbcETQPGsrWOHqo6woQ

??? note "Unpacking The Radio"

    ![](../images/unpack_tech_pics/unpack_hackmd_1.png)

??? note "Inventory"

    ![](../images/unpack_tech_pics/unpack_hackmd_2.png)

**REPORT ON SCREEN MODULE**

https://hackmd.io/@NMSoU2fTSTmrp4ucDbylgw/r1bYmChgbx

??? note "Screen Module"

    ![](../images/unpack_tech_pics/unpack_hackmd_3.png)

**REPORT ON SPEAKER**

https://hackmd.io/qp2S-dgZQey9tZz_A9kBEQ

??? note "Speaker"

    ![](../images/unpack_tech_pics/unpack_hackmd_4.png)

# Forensic Report: The Radio

===============

![GIF_20251120_192716_178](https://hackmd.io/_uploads/B1yMknTe-x.gif)

| Identity of the reporting agency       | MDEF                                                   |
| -------------------------------------- | ------------------------------------------------------ |
| Case identifier                        | Forensics of the Obsolescence                          |
| Identity of the submitter              | Hannah Peevey, Ishan Mudgal, Maryam Shojaei, Sıla Kara |
| Date of receipt                        | 19.11.2024                                             |
| Date of report                         | 20.11.2024                                             |
| Identity and signature of the examiner | Hannah, Ishan, Maryam, Sıla                            |
| Status                                 | Somehow Works                                          |

## The Radio

![IMG_5526](https://hackmd.io/_uploads/HyTx-vsgbx.jpg)

:::info

**Brand:** Sunstech
**Serial number:** SPA / 090100471
**Model:** Arch Audio RP-RD3000
**Colour:** Dark Wood (Box), Black (Back and Front Face)
**Made in:** China
:::

## Examination

| Picture                                                 | Part Name                  | Serial number                  | Quantity | Specifications                                                              | Made in |
| ------------------------------------------------------- | -------------------------- | ------------------------------ | -------- | --------------------------------------------------------------------------- | ------- |
| ![comp (3)](https://hackmd.io/_uploads/SkeMzvsxWe.jpg)  | Outer Body                 | -                              | 1        | wood veneer                                                                 | -       |
| ![comp (19)](https://hackmd.io/_uploads/ryUJNwjgZg.jpg) | Front panel                | -                              | 1        | injection-molded plastic                                                    | -       |
| ![comp (11)](https://hackmd.io/_uploads/Hy8AEPilWl.jpg) | Buttons                    | -                              | 1        | silicon plastic : power, band selection, tuning, volume, preset selection   | -       |
| ![comp (10)](https://hackmd.io/_uploads/Sk0a8Psebx.jpg) | LCD screen Board           | H5080key Ver 2.0               | 1        | Board                                                                       | HAMco   |
| ![comp (18)](https://hackmd.io/_uploads/r1HFwDoebx.jpg) | Cupper Sheet               | -                              | 1        | Electromagnetic shielding                                                   | -       |
| ![comp-(5)](https://hackmd.io/_uploads/H1RLswieZe.jpg)  | Main Radio Board           | H5080 Radio Ver 1.8/2008 02 18 | 1        | silicon plastic : power, band selection, tuning, volume, preset selection   | HAMco   |
| ![comp (14)](https://hackmd.io/_uploads/rkjNTvoebe.jpg) | Alarm Button               | -                              | 1        | injection-molded plastic                                                    | -       |
| ![comp (13)](https://hackmd.io/_uploads/BJbrpvsl-x.jpg) | Sleep Button               | -                              | 1        | injection-molded plastic                                                    | -       |
| ![comp-(8)](https://hackmd.io/_uploads/H18iCOng-l.jpg)  | Speaker                    | -                              | 1        | Single internal speaker for audio output                                    | -       |
| ![comp (7)](https://hackmd.io/_uploads/Sy_rwY2g-l.jpg)  | Speaker Mesh               | -                              | 1        | Protects speaker and allows sound through                                   | -       |
| ![comp (6)](https://hackmd.io/_uploads/rJfsPKhxWl.jpg)  | Speaker Plastic washer     | -                              | 1        | Secures speaker, reduces vibration, prevents rattling So together           | -       |
| ![comp (15)](https://hackmd.io/_uploads/H19U9KneWe.jpg) | Rotary volume control knob | -                              | 1        | User interface for adjusting volume                                         | -       |
| ![comp (4)](https://hackmd.io/_uploads/SJ_xTtneWe.jpg)  | Power supply transformer   | YSP-1120070V                   | 1        | Converts mains AC voltage to lower DC/AC voltage for the circuit            |
| ![comp (1)](https://hackmd.io/_uploads/B1NkzhTlZg.jpg)  | Rear Panel                 | -                              | 1        | providing access to power and internal components, injection-molded plastic | -       |
| ![comp (9)](https://hackmd.io/_uploads/Bkgmg4nalZg.jpg) | Battery Cover              | -                              | 1        | A removable plastic cover that protects the batteries                       | -       |
| ![comp (17)](https://hackmd.io/_uploads/Hk9iN26eZx.jpg) | Batteries                  | -                              | 1        | Provide portable power when the radio is not connected to AC                | -       |

## Forensic Questions

### What does it do?

The Sunstech RPRD3000 is a portable/desktop AM/FM radio designed mainly for home use. According to the product information and its manual, it offers:

- AM and FM radio reception
- Built-in loudspeaker for audio playback
- Station presets (memory storage)
- LCD display for tuning and functions
- AUX-IN input to play external audio devices

Overall, it functions as a retro-style radio with additional audio playback capabilities.
<br>

### How does it work?

The Sunstech RPRD3000 is an analog radio receiver with digital controls. Its operation is based on receiving radio frequency (RF) signals, converting them into audio signals, and playing the sound through its internal speaker.

**1) Radio Signal Reception**
The internal AM/FM antenna captures electromagnetic radio waves from broadcasting stations. The tuner selects a specific frequency in either the AM or FM band. A tuning circuit filters out all other frequencies, allowing only the chosen station to pass through.

**2) Signal Conversion**
Once the radio wave is received: The tuner sends the RF signal into the demodulator. The demodulator separates the audio information from the RF carrier wave. The extracted audio becomes a low-level signal — too weak to hear yet. This is the basic principle of AM/FM demodulation.

**3) Audio Amplification**
A built-in audio amplifier increases the strength of the audio signal. The amplified signal drives the internal 4W RMS loudspeaker. This turns the electrical audio signal into audible sound (vibrations in air).

**4) Display and Controls**
A microcontroller inside the device reads user input from buttons:

- Power
- Band selection (AM/FM)
- Tuning up/down
- Volume control
- Station presets

It shows tuning frequency and settings on the LCD screen. So although the radio technology is analog, the user interface is digital.

**5) AUX Mode**
When an external device (like a phone) is connected the AUX input bypasses the radio tuner. The external audio directly enters the amplifier, using the radio as a speaker system. No radio signal involved, just audio playback through its internal speaker.

**6) Power System**
The device mainly runs from AC mains power. It may also include a backup power function to retain saved stations if unplugged.

Radio Waves → Antenna → Tuner → Demodulator → Audio Amplifier → Speaker → Sound
↓
Microcontroller → LCD + Controls

In AUX mode:

External Device → AUX Jack → Audio Amplifier → Speaker → Sound

<br>

### How is it built?

It is constructed as a simple consumer-grade audio device: low-power electronics, mass-produced chassis, and standard loudspeaker design.

The base for the build is a wood casing open on the front and back. The plastic plates on the front and the back connect to each other from within the casing while holding two circuit boards and other components between them.

The back plate also has a battery box, and a connection point for the antenna. It also holds the transformer and its cable, and has an outlet for the cable to the plug. It has plastic extrusions to screw to the front plate through the inside of the radio device.

<br>

### Why it failed, or it wasn't used anymore?

Although the Sunstech RPRD3000 was fully functional and still working properly, it gradually became less practical for modern users. The device is based on traditional AM/FM radio technology and does not include features such as:

- Wi-Fi or Internet radio
- Bluetooth connectivity
- Streaming services
- Smart functions or app integration

Because today most people listen to music, radio stations, and podcasts online through smartphones, smart speakers, or Bluetooth systems, this type of standalone radio is considered outdated.
So, the device did not fail technically — it simply became less relevant due to changes in consumer habits and modern audio technology.

<br>

## Steps taken

1. Cleaned the dust off the raido and brought it to the MDEF room.
2. Disassembled using our toolbox.
3. Separated into three main parts as follows:

- The box/case
- Back and front plastic cover
- Inner electronics and plastics

4. Laid out all parts individually and documented.
   ![IMG_5544 (1)](https://hackmd.io/_uploads/rJP_ivseZg.jpg)

## Testing

After the disassembly process, we meticulously examined each individual component. Utilizing a precision lab power supply and a high-resolution multimeter, we conducted comprehensive tests to determine the optimal voltage required for each component's functionality.
