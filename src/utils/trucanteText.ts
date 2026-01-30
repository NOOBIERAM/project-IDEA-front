export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;

    const truncated = text.slice(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    if (lastSpaceIndex === -1) return text.slice(0, maxLength) + "...";

    return truncated.slice(0, lastSpaceIndex) + "...";
}