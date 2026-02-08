export const COLORS = {
    primary: '#1C1C1E',        // Dark background for buttons
    secondary: '#8E8E93',      // Secondary text color
    accent: '#BFFF00',         // Neon green/yellow accent
    text: '#000000',           // Primary text
    textLight: '#8E8E93',      // Light gray text
    white: '#FFFFFF',          // White background
    background: '#F8F8F8',     // Light gray background
    border: '#E5E5EA',         // Input borders
    inputBg: '#F2F2F7',        // Input background
    success: '#34C759',        // Success/checkmark color
    error: '#FF3B30',          // Error/discount color
    warning: '#FFD700',        // Warning/star color
    googleBorder: '#DADCE0',   // Google button border
    cardBorder: '#F0F0F0',     // Card borders
    overlay: 'rgba(0, 0, 0, 0.6)', // Dark overlay for images
    modalOverlay: 'rgba(0, 0, 0, 0.5)', // Modal background
};

export const FONTS = {
    bold: 'System',
    semiBold: 'System',
    medium: 'System',
    regular: 'System',
};

export const SPACING = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    xxxxl: 40,
};

export const SIZES = {
    // Font sizes
    h1: 28,
    h2: 24,
    h3: 20,
    h4: 18,
    body: 16,
    small: 14,
    tiny: 12,

    // Border radius
    radiusSmall: 8,
    radiusMedium: 12,
    radiusLarge: 16,
    radiusButton: 25,
    radiusRound: 50,

    // Button heights
    buttonHeight: 50,
    inputHeight: 50,
    headerHeight: 60,
    
    // Icon sizes
    iconSmall: 16,
    iconMedium: 20,
    iconLarge: 24,
    
    // Image sizes
    profileImage: 50,
    cardImageHeight: 120,
    turfImageHeight: 220,
};

// Common styles that can be reused across screens
export const COMMON_STYLES = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 120, // Space for bottom navigation
    },
    
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.xl,
        paddingVertical: SPACING.lg,
    },
    
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    headerTitle: {
        fontSize: SIZES.h4,
        fontWeight: '600',
        color: COLORS.text,
    },
    
    section: {
        paddingHorizontal: SPACING.xl,
        marginBottom: SPACING.xxl,
    },
    
    sectionTitle: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.lg,
    },
    
    card: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radiusMedium,
        borderWidth: 1,
        borderColor: COLORS.cardBorder,
        overflow: 'hidden',
    },
    
    primaryButton: {
        backgroundColor: COLORS.primary,
        height: SIZES.buttonHeight,
        borderRadius: SIZES.radiusButton,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    primaryButtonText: {
        fontSize: SIZES.body,
        fontWeight: '600',
        color: COLORS.white,
    },
    
    secondaryButton: {
        backgroundColor: COLORS.background,
        height: SIZES.buttonHeight,
        borderRadius: SIZES.radiusButton,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    
    secondaryButtonText: {
        fontSize: SIZES.body,
        fontWeight: '500',
        color: COLORS.text,
    },
    
    textInput: {
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: SIZES.radiusMedium,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm + 6, // 14px
        fontSize: SIZES.body,
        color: COLORS.text,
        backgroundColor: COLORS.white,
        height: SIZES.inputHeight,
    },
    
    heartIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: COLORS.overlay,
        padding: 8,
        borderRadius: 20,
    },
    
    ratingStars: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    highlightBackground: {
        backgroundColor: COLORS.accent,
        borderRadius: SIZES.radiusMedium,
        padding: SPACING.xl,
    },
};
