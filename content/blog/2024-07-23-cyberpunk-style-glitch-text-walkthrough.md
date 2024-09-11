---
title: Cyberpunk-Style Glitch Text Walkthrough
date: 2024-07-23T18:35:26.560Z
lastmod: 2024-07-26T17:49:19.234Z
image: /images/blog/2024-07-23-cyberpunk-style-glitch-text-walkthrough/Peek 2024-07-24 22-34.gif
description: Discover how to create a cyberpunk-style glitch text effect using pure CSS. This guide covers text layering, clip-paths, and animations for a dynamic, futuristic look. Dive in and start glitching!
tags:
    - Web-Dev
    - CSS
    - Programming
draft: false
slug: cyberpunk-style-glitch-text-walkthrough
---

This came out of a 24-hour work sprint to replicate some sophisticated video VFX and to make it more flexible.

There's a lot of pieces that go into an effect like this. What follows is an outline of the animations and VFX concepts, all in pure css :)

**Core principles:**

* Keep the text legible most of the time
* Don't throw too many glitches in per second. Give it space to breathe
* Whitespace never hurt anyone
* Blurs & glows lend a feeling of realism in dark environments (queue neon)

---

{{< toc >}}

---

<style>
.post-single-content .hero {
    font-size: clamp(40px, 10vw, 100px);
    line-height: 1;
    display: inline-block;
    color: #fff;
    z-index: 2;
    letter-spacing: 10px;

    /* Bright things in dark environments usually cast that light, giving off a glow */
    filter: drop-shadow(0 1px 3px);
}

.post-single-content .demo {
    height: 100px;
    margin: 0 20px 0 20px;
    background: #fff;
}

.post-single-content .layers {
    position: relative;
}

.post-single-content .layers::before,
.post-single-content .layers::after {
    content: attr(data-text);
    position: absolute;
    width: 110%;
    z-index: -1;
}

.post-single-content .layers::before {
    top: 10px;
    left: 15px;
    color: #e0287d;
}

.post-single-content .layers::after {
    top: 5px;
    left: -10px;
    color: #1bc7fb;
}

.post-single-content .single-path {
    clip-path: polygon(
        0% 12%,
        53% 12%,
        53% 26%,
        25% 26%,
        25% 86%,
        31% 86%,
        31% 0%,
        53% 0%,
        53% 84%,
        92% 84%,
        92% 82%,
        70% 82%,
        70% 29%,
        78% 29%,
        78% 65%,
        69% 65%,
        69% 66%,
        77% 66%,
        77% 45%,
        85% 45%,
        85% 26%,
        97% 26%,
        97% 28%,
        84% 28%,
        84% 34%,
        54% 34%,
        54% 89%,
        30% 89%,
        30% 58%,
        83% 58%,
        83% 5%,
        68% 5%,
        68% 36%,
        62% 36%,
        62% 1%,
        12% 1%,
        12% 34%,
        60% 34%,
        60% 57%,
        98% 57%,
        98% 83%,
        1% 83%,
        1% 53%,
        91% 53%,
        91% 84%,
        8% 84%,
        8% 83%,
        4% 83%
    );
}

.post-single-content .paths {
    animation: paths 5s step-end infinite;
}

@keyframes paths {
    0% {
        clip-path: polygon(
            0% 43%,
            83% 43%,
            83% 22%,
            23% 22%,
            23% 24%,
            91% 24%,
            91% 26%,
            18% 26%,
            18% 83%,
            29% 83%,
            29% 17%,
            41% 17%,
            41% 39%,
            18% 39%,
            18% 82%,
            54% 82%,
            54% 88%,
            19% 88%,
            19% 4%,
            39% 4%,
            39% 14%,
            76% 14%,
            76% 52%,
            23% 52%,
            23% 35%,
            19% 35%,
            19% 8%,
            36% 8%,
            36% 31%,
            73% 31%,
            73% 16%,
            1% 16%,
            1% 56%,
            50% 56%,
            50% 8%
        );
    }

    5% {
        clip-path: polygon(
            0% 29%,
            44% 29%,
            44% 83%,
            94% 83%,
            94% 56%,
            11% 56%,
            11% 64%,
            94% 64%,
            94% 70%,
            88% 70%,
            88% 32%,
            18% 32%,
            18% 96%,
            10% 96%,
            10% 62%,
            9% 62%,
            9% 84%,
            68% 84%,
            68% 50%,
            52% 50%,
            52% 55%,
            35% 55%,
            35% 87%,
            25% 87%,
            25% 39%,
            15% 39%,
            15% 88%,
            52% 88%
        );
    }

    30% {
        clip-path: polygon(
            0% 53%,
            93% 53%,
            93% 62%,
            68% 62%,
            68% 37%,
            97% 37%,
            97% 89%,
            13% 89%,
            13% 45%,
            51% 45%,
            51% 88%,
            17% 88%,
            17% 54%,
            81% 54%,
            81% 75%,
            79% 75%,
            79% 76%,
            38% 76%,
            38% 28%,
            61% 28%,
            61% 12%,
            55% 12%,
            55% 62%,
            68% 62%,
            68% 51%,
            0% 51%,
            0% 92%,
            63% 92%,
            63% 4%,
            65% 4%
        );
    }

    45% {
        clip-path: polygon(
            0% 33%,
            2% 33%,
            2% 69%,
            58% 69%,
            58% 94%,
            55% 94%,
            55% 25%,
            33% 25%,
            33% 85%,
            16% 85%,
            16% 19%,
            5% 19%,
            5% 20%,
            79% 20%,
            79% 96%,
            93% 96%,
            93% 50%,
            5% 50%,
            5% 74%,
            55% 74%,
            55% 57%,
            96% 57%,
            96% 59%,
            87% 59%,
            87% 65%,
            82% 65%,
            82% 39%,
            63% 39%,
            63% 92%,
            4% 92%,
            4% 36%,
            24% 36%,
            24% 70%,
            1% 70%,
            1% 43%,
            15% 43%,
            15% 28%,
            23% 28%,
            23% 71%,
            90% 71%,
            90% 86%,
            97% 86%,
            97% 1%,
            60% 1%,
            60% 67%,
            71% 67%,
            71% 91%,
            17% 91%,
            17% 14%,
            39% 14%,
            39% 30%,
            58% 30%,
            58% 11%,
            52% 11%,
            52% 83%,
            68% 83%
        );
    }

    76% {
        clip-path: polygon(
            0% 26%,
            15% 26%,
            15% 73%,
            72% 73%,
            72% 70%,
            77% 70%,
            77% 75%,
            8% 75%,
            8% 42%,
            4% 42%,
            4% 61%,
            17% 61%,
            17% 12%,
            26% 12%,
            26% 63%,
            73% 63%,
            73% 43%,
            90% 43%,
            90% 67%,
            50% 67%,
            50% 41%,
            42% 41%,
            42% 46%,
            50% 46%,
            50% 84%,
            96% 84%,
            96% 78%,
            49% 78%,
            49% 25%,
            63% 25%,
            63% 14%
        );
    }

    90% {
        clip-path: polygon(
            0% 41%,
            13% 41%,
            13% 6%,
            87% 6%,
            87% 93%,
            10% 93%,
            10% 13%,
            89% 13%,
            89% 6%,
            3% 6%,
            3% 8%,
            16% 8%,
            16% 79%,
            0% 79%,
            0% 99%,
            92% 99%,
            92% 90%,
            5% 90%,
            5% 60%,
            0% 60%,
            0% 48%,
            89% 48%,
            89% 13%,
            80% 13%,
            80% 43%,
            95% 43%,
            95% 19%,
            80% 19%,
            80% 85%,
            38% 85%,
            38% 62%
        );
    }

    1%,
    7%,
    33%,
    47%,
    78%,
    93% {
        clip-path: none;
    }
}

.post-single-content .movement {
    /* Normally this position would be absolute & on the layers, set to relative here so we can see it on the div */
    position: relative;
    animation: movement 8s step-end infinite;
}

@keyframes movement {
    0% {
        top: 0px;
        left: -20px;
    }

    15% {
        top: 10px;
        left: 10px;
    }

    60% {
        top: 5px;
        left: -10px;
    }

    75% {
        top: -5px;
        left: 20px;
    }

    100% {
        top: 10px;
        left: 5px;
    }
}

.post-single-content .opacity {
    animation: opacity 5s step-end infinite;
}

@keyframes opacity {
    0% {
        opacity: 0.1;
    }

    5% {
        opacity: 0.7;
    }

    30% {
        opacity: 0.4;
    }

    45% {
        opacity: 0.6;
    }

    76% {
        opacity: 0.4;
    }

    90% {
        opacity: 0.8;
    }

    1%,
    7%,
    33%,
    47%,
    78%,
    93% {
        opacity: 0;
    }
}

.post-single-content .font {
    animation: font 7s step-end infinite;
}

@keyframes font {
    0% {
        font-weight: 100;
        color: #e0287d;
        filter: blur(3px);
    }

    20% {
        font-weight: 500;
        color: #fff;
        filter: blur(0);
    }

    50% {
        font-weight: 300;
        color: #1bc7fb;
        filter: blur(2px);
    }

    60% {
        font-weight: 700;
        color: #fff;
        filter: blur(0);
    }

    90% {
        font-weight: 500;
        color: #e0287d;
        filter: blur(6px);
    }
}

.post-single-content .glitch span {
    animation: paths 5s step-end infinite;
}

.post-single-content .glitch::before {
    animation: paths 5s step-end infinite, opacity 5s step-end infinite,
        font 8s step-end infinite, movement 10s step-end infinite;
}

.post-single-content .glitch::after {
    animation: paths 5s step-end infinite, opacity 5s step-end infinite,
        font 7s step-end infinite, movement 8s step-end infinite;
}

.post-single-content .hero-container {
    position: relative;
    padding: 200px 0;
    text-align: center;
}

.post-single-content .environment {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    filter: blur(5px);
    background: url(https://images.unsplash.com/photo-1602136773736-34d445b989cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)
        center no-repeat;
    background-size: cover;
}
</style>

## The Effect

This is how the complete effect looks like

{{< details "The Effect (What we are going to make)">}}
<div class="hero-container">
    <div class="environment"></div>
    <h2 class="hero glitch layers" data-text="近設計"><span>近設計</span></h2>
</div>
{{< /details >}}

## Layers

Create multiple layers to play with. For this example I'll use `::before` & `::after` elements, but this could just as easily be multiple div's overlapped, or whatever.

<h2 class="hero layers" data-text="EXAMPLE">EXAMPLE</h2>

{{< details "Example layers CSS:" >}}

```css {linenos=true}
.layers {
    position: relative;
}

.layers::before,
.layers::after {
    content: attr(data-text);
    position: absolute;
    width: 110%;
    z-index: -1;
}

.layers::before {
    top: 10px;
    left: 15px;
    color: #e0287d;
}

.layers::after {
    top: 5px;
    left: -10px;
    color: #1bc7fb;
}
```

{{< /details >}}

## Paths

Build out a set of clip-paths (I wrote up a [generator util](/tools/randomly-generated-clip-path/) for this project)

**Example Path:**

<div class="demo single-path"></div>

**Over Text:**

<h2 class="hero paths">EXAMPLE</h2>

{{< details "Example paths CSS:" >}}

```css {linenos=true}
.single-path {
    clip-path: polygon(
        0% 12%,
        53% 12%,
        53% 26%,
        25% 26%,
        25% 86%,
        31% 86%,
        31% 0%,
        53% 0%,
        53% 84%,
        92% 84%,
        92% 82%,
        70% 82%,
        70% 29%,
        78% 29%,
        78% 65%,
        69% 65%,
        69% 66%,
        77% 66%,
        77% 45%,
        85% 45%,
        85% 26%,
        97% 26%,
        97% 28%,
        84% 28%,
        84% 34%,
        54% 34%,
        54% 89%,
        30% 89%,
        30% 58%,
        83% 58%,
        83% 5%,
        68% 5%,
        68% 36%,
        62% 36%,
        62% 1%,
        12% 1%,
        12% 34%,
        60% 34%,
        60% 57%,
        98% 57%,
        98% 83%,
        1% 83%,
        1% 53%,
        91% 53%,
        91% 84%,
        8% 84%,
        8% 83%,
        4% 83%
    );
}

.paths {
    animation: paths 5s step-end infinite;
}

@keyframes paths {
    0% {
        clip-path: polygon(
            0% 43%,
            83% 43%,
            83% 22%,
            23% 22%,
            23% 24%,
            91% 24%,
            91% 26%,
            18% 26%,
            18% 83%,
            29% 83%,
            29% 17%,
            41% 17%,
            41% 39%,
            18% 39%,
            18% 82%,
            54% 82%,
            54% 88%,
            19% 88%,
            19% 4%,
            39% 4%,
            39% 14%,
            76% 14%,
            76% 52%,
            23% 52%,
            23% 35%,
            19% 35%,
            19% 8%,
            36% 8%,
            36% 31%,
            73% 31%,
            73% 16%,
            1% 16%,
            1% 56%,
            50% 56%,
            50% 8%
        );
    }

    5% {
        clip-path: polygon(
            0% 29%,
            44% 29%,
            44% 83%,
            94% 83%,
            94% 56%,
            11% 56%,
            11% 64%,
            94% 64%,
            94% 70%,
            88% 70%,
            88% 32%,
            18% 32%,
            18% 96%,
            10% 96%,
            10% 62%,
            9% 62%,
            9% 84%,
            68% 84%,
            68% 50%,
            52% 50%,
            52% 55%,
            35% 55%,
            35% 87%,
            25% 87%,
            25% 39%,
            15% 39%,
            15% 88%,
            52% 88%
        );
    }

    30% {
        clip-path: polygon(
            0% 53%,
            93% 53%,
            93% 62%,
            68% 62%,
            68% 37%,
            97% 37%,
            97% 89%,
            13% 89%,
            13% 45%,
            51% 45%,
            51% 88%,
            17% 88%,
            17% 54%,
            81% 54%,
            81% 75%,
            79% 75%,
            79% 76%,
            38% 76%,
            38% 28%,
            61% 28%,
            61% 12%,
            55% 12%,
            55% 62%,
            68% 62%,
            68% 51%,
            0% 51%,
            0% 92%,
            63% 92%,
            63% 4%,
            65% 4%
        );
    }

    45% {
        clip-path: polygon(
            0% 33%,
            2% 33%,
            2% 69%,
            58% 69%,
            58% 94%,
            55% 94%,
            55% 25%,
            33% 25%,
            33% 85%,
            16% 85%,
            16% 19%,
            5% 19%,
            5% 20%,
            79% 20%,
            79% 96%,
            93% 96%,
            93% 50%,
            5% 50%,
            5% 74%,
            55% 74%,
            55% 57%,
            96% 57%,
            96% 59%,
            87% 59%,
            87% 65%,
            82% 65%,
            82% 39%,
            63% 39%,
            63% 92%,
            4% 92%,
            4% 36%,
            24% 36%,
            24% 70%,
            1% 70%,
            1% 43%,
            15% 43%,
            15% 28%,
            23% 28%,
            23% 71%,
            90% 71%,
            90% 86%,
            97% 86%,
            97% 1%,
            60% 1%,
            60% 67%,
            71% 67%,
            71% 91%,
            17% 91%,
            17% 14%,
            39% 14%,
            39% 30%,
            58% 30%,
            58% 11%,
            52% 11%,
            52% 83%,
            68% 83%
        );
    }

    76% {
        clip-path: polygon(
            0% 26%,
            15% 26%,
            15% 73%,
            72% 73%,
            72% 70%,
            77% 70%,
            77% 75%,
            8% 75%,
            8% 42%,
            4% 42%,
            4% 61%,
            17% 61%,
            17% 12%,
            26% 12%,
            26% 63%,
            73% 63%,
            73% 43%,
            90% 43%,
            90% 67%,
            50% 67%,
            50% 41%,
            42% 41%,
            42% 46%,
            50% 46%,
            50% 84%,
            96% 84%,
            96% 78%,
            49% 78%,
            49% 25%,
            63% 25%,
            63% 14%
        );
    }

    90% {
        clip-path: polygon(
            0% 41%,
            13% 41%,
            13% 6%,
            87% 6%,
            87% 93%,
            10% 93%,
            10% 13%,
            89% 13%,
            89% 6%,
            3% 6%,
            3% 8%,
            16% 8%,
            16% 79%,
            0% 79%,
            0% 99%,
            92% 99%,
            92% 90%,
            5% 90%,
            5% 60%,
            0% 60%,
            0% 48%,
            89% 48%,
            89% 13%,
            80% 13%,
            80% 43%,
            95% 43%,
            95% 19%,
            80% 19%,
            80% 85%,
            38% 85%,
            38% 62%
        );
    }

    1%,
    7%,
    33%,
    47%,
    78%,
    93% {
        clip-path: none;
    }
}
```

{{< /details >}}

## Movement

Create a stepping movement animation, so that the layers above can appear in different places as the other layers of the animation happen.

It's best to make this timing somewhat erratic.

<div class="demo movement"></div>

{{< details "Example movement CSS:" >}}

```css {linenos=true}
.movement {
    /* Normally this position would be
    absolute & on the layers, set to relative
    here so we can see it on the div */
    position: relative;
    animation: movement 8s step-end infinite;
}

@keyframes movement {
    0% {
        top: 0px;
        left: -20px;
    }

    15% {
        top: 10px;
        left: 10px;
    }

    60% {
        top: 5px;
        left: -10px;
    }

    75% {
        top: -5px;
        left: 20px;
    }

    100% {
        top: 10px;
        left: 5px;
    }
}
```

{{< /details >}}

## Opacity

Create a similar animation for opacity, so that the layers can appear/disappear. This will get layered with the movement to create the appearance of the layers popping in and out in different places.

There's an art to getting this transition to work without making the user feel motion sickness. Take some time getting it right!

<div class="demo opacity"></div>

{{< details "Example opacity CSS:" >}}

```css {linenos=true}
.opacity {
    animation: opacity 5s step-end infinite;
}

@keyframes opacity {
    0% {
        opacity: 0.1;
    }

    5% {
        opacity: 0.7;
    }

    30% {
        opacity: 0.4;
    }

    45% {
        opacity: 0.6;
    }

    76% {
        opacity: 0.4;
    }

    90% {
        opacity: 0.8;
    }

    1%,
    7%,
    33%,
    47%,
    78%,
    93% {
        opacity: 0;
    }
}
```

{{< /details >}}

## Font

The next layer is changes to the font directly. These could be any properties, but we'll stick to font-weight and color.

<h2 class="hero font">EXAMPLE</h2>

{{< details "Example font CSS:" >}}

```css {linenos=true}
.font {
    animation: font 7s step-end infinite;
}

@keyframes font {
    0% {
        font-weight: 100;
        color: #e0287d;
        filter: blur(3px);
    }

    20% {
        font-weight: 500;
        color: #fff;
        filter: blur(0);
    }

    50% {
        font-weight: 300;
        color: #1bc7fb;
        filter: blur(2px);
    }

    60% {
        font-weight: 700;
        color: #fff;
        filter: blur(0);
    }

    90% {
        font-weight: 500;
        color: #e0287d;
        filter: blur(6px);
    }
}
```

{{< /details >}}

## Combined Animation Layers

Note that some of the animations have sync'd timing, and some don't.

I try to sync the paths & opacity animations, so that it looks like the background layers are really a part of the main text that's glitching off.

Then I try to separately sync the color/text/filter other effects, and keep the movement separate completely. This gives the whole thing the appearance of a lot more effects than are actually happening, because of the different combinations.

<h2 class="hero glitch layers" data-text="EXAMPLE">
    <span>EXAMPLE</span>
</h2>

{{< details "Example CSS:" >}}

```css {linenos=true}
.glitch span {
    animation: paths 5s step-end infinite;
}

.glitch::before {
    animation: paths 5s step-end infinite, opacity 5s step-end infinite,
        font 8s step-end infinite, movement 10s step-end infinite;
}

.glitch::after {
    animation: paths 5s step-end infinite, opacity 5s step-end infinite,
        font 7s step-end infinite, movement 8s step-end infinite;
}
```

{{< /details >}}

## Environment

For good measure, it should live in the right language & context :)

<div class="hero-container">
    <div class="environment"></div>
    <h2 class="hero glitch layers" data-text="近設計"><span>近設計</span></h2>
</div>

{{< figcaption >}}
background image from: [unsplash.com](https://images.unsplash.com/photo-1602136773736-34d445b989cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)
{{< /figcaption >}}

{{< details "Example environment CSS:" >}}

```css {linenos=true}
.hero-container {
    position: relative;
    padding: 200px 0;
    text-align: center;
}

.environment {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    filter: blur(5px);
    background: url(https://images.unsplash.com/photo-1602136773736-34d445b989cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)
        center no-repeat;
    background-size: cover;
}
```

{{< /details >}}

{{< details "Example HTML layout:">}}

```html {linenos=true}
<div class="hero-container">
    <div class="environment"></div>
    <h2 class="hero glitch layers" data-text="近設計"><span>近設計</span></h2>
</div>
```

{{< /details >}}

## Conclusion

With this walkthrough, you should now have a basic understanding of how to create glitch effects using pure CSS. By layering text, applying clip-paths, and animating movement, opacity, and font properties, you can achieve a striking cyberpunk-style effect. Experiment with these techniques to customize and enhance your web projects with a unique, futuristic flair. Dive in and start glitching!
