import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

interface LogoProps {
  sizeMultiplier?: number; 
}

const { width } = Dimensions.get('window');

const Logo: React.FC<LogoProps> = ({ sizeMultiplier = 0.7 }) => {
  const logoStyle = {
    ...styles.logo,
    width: width * sizeMultiplier,
    height: width * sizeMultiplier,
  };

  return (
    <Image source={require('../assets/logo.png')} style={logoStyle} />
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    marginBottom: '3%',
  },
});

export default Logo;
