export const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -150; // hauteur navbar
    const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
};