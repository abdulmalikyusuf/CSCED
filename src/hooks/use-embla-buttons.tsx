import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
    slidesInView: number[];
    scrollTo: (id: number) => void;
};

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [slidesInView, setSlidesInView] = useState([0]);

    const scrollTo = (id: number) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(id, true);
    };
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSlidesInView(emblaApi.slidesInView());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
        scrollTo,
        slidesInView,
    };
};
