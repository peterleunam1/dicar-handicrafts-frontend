export default function toCapitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.toLocaleLowerCase().slice(1);
}