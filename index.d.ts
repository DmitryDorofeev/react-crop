declare module 'react-crop' {
  
  interface ICropperProps {
    width: number;
    height: number;
    center?: boolean;
    image?: any;
    widthLabel?: string;
    heightLabel?: string;
    offsetXLabel?: string;
    offsetYLabel?: string;
    onImageLoaded?(image: HTMLImageElement);
    onChange?(image: HTMLImageElement): Promise<Blob>;
  }
  
  class Cropper extends React.Component<ICropperProps, any> {
    
  }
  
  export default Cropper;
}
