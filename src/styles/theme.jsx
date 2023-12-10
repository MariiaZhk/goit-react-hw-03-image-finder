export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    buttonColor: '#5daef1',
    backgroundColor: '#242424',
    hovers: '#016abc',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '20px',
  },

  fontWeights: {
    semiBold: '600',
    extraBold: '800',
  },

  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '20px',
  },

  spacing: value => `${4 * value}px`,

  shadows: {
    img: '0 4px 8px 0 rgba(215, 212, 212, 0.323), 0 6px 20px 0 rgba(165, 164, 164, 0.19)',
    btnInput:
      '0 4px 4px 0 rgba(241, 234, 234, 0.323), 0 4px 4px 0 rgba(189, 188, 188, 0.19)',
  },

  borders: {
    borderStyle: '1px solid #999797',
  },
});
