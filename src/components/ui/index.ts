/**
 * Componentes UI Reutilizables
 * 
 * Este directorio contiene componentes base reutilizables que pueden
 * ser usados en cualquier sección del sitio.
 * 
 * Componentes disponibles:
 * 
 * - Button.astro: Botones y enlaces con variantes (primary, secondary, outline, ghost)
 * - Card.astro: Tarjetas con imagen y texto, soporta alternancia de posición
 * - SectionTitle.astro: Títulos de sección con subtítulo y badge opcional
 * 
 * Ejemplo de uso:
 * 
 * ```astro
 * ---
 * import Button from "../components/ui/Button.astro";
 * import Card from "../components/ui/Card.astro";
 * import SectionTitle from "../components/ui/SectionTitle.astro";
 * ---
 * 
 * <SectionTitle subtitle="Lo mejor" badge="NUEVO">
 *   Nuestros Servicios
 * </SectionTitle>
 * 
 * <Card image="/assets/icon.png" title="Servicio">
 *   Descripción del servicio
 * </Card>
 * 
 * <Button href="#cotizar" variant="primary" size="lg">
 *   Cotizar ahora
 * </Button>
 * ```
 */

export { };
