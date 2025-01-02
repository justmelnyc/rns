import {useEffect, useMemo, DependencyList, CSSProperties} from 'react'

type StyleValue = string | number;

// Type for CSS properties including custom properties
type CSSPropertyName = keyof Omit<CSSStyleDeclaration, 'length' | 'parentRule' | 'getPropertyPriority' | 'getPropertyValue' | 'item' | 'removeProperty' | 'setProperty'> | `--${string}`;

// type StyleProperties = {
//     [key in CSSPropertyName]: StyleValue;
// };

interface StyleCondition {
    condition: boolean;
    styles: CSSProperties;
}

interface UseHtmlStyleOptions {
    defaultStyles?: CSSProperties;
    conditions?: StyleCondition[];
    enabled?: boolean;
}

/**
 * Enhanced hook to dynamically update the style attribute of the HTML tag with conditions
 * @param options Configuration object containing default styles and conditions
 * @param dependencies Array of dependencies to watch for changes
 */
const useHtmlStyle = (
    options: UseHtmlStyleOptions,
    dependencies: DependencyList = []
) => {
    const {
        defaultStyles = {},
        conditions = [],
        enabled = true
    } = options;

    // Compute final styles based on conditions
    const computedStyles = useMemo(() => {
        if (!enabled) return {};

        // Start with default styles
        const finalStyles = { ...defaultStyles };

        // Apply conditional styles in order
        conditions.forEach(({ condition, styles }) => {
            if (condition) {
                Object.assign(finalStyles, styles);
            }
        });

        return finalStyles;
    }, [enabled, defaultStyles, ...dependencies]);

    useEffect(() => {
        if (!enabled) return;

        const htmlElement = document.documentElement;
        const originalStyles: Record<string, string | null> = {};

        // Store original styles
        Object.keys(computedStyles).forEach((property) => {
            const normalizedProperty = property.startsWith('--')
                ? property
                : property.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
            originalStyles[normalizedProperty] = htmlElement.style.getPropertyValue(normalizedProperty);
        });

        // Apply computed styles
        Object.entries(computedStyles).forEach(([property, value]) => {
            const normalizedProperty = property.startsWith('--')
                ? property
                : property.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

            // Type-safe setProperty call
            htmlElement.style.setProperty(
                normalizedProperty,
                String(value),
                undefined // priority parameter (optional)
            );
        });

        // Cleanup function
        return () => {
            // Remove all properties we added
            Object.keys(computedStyles).forEach((property) => {
                const normalizedProperty = property.startsWith('--')
                    ? property
                    : property.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

                htmlElement.style.removeProperty(normalizedProperty);
            });

            // Restore original styles
            Object.entries(originalStyles).forEach(([property, value]) => {
                if (value !== null) {
                    htmlElement.style.setProperty(property, value);
                }
            });
        };
    }, [computedStyles, enabled]);
};

export default useHtmlStyle;