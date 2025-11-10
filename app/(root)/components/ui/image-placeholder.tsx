'use client';

import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  type?: 'mobile' | 'web' | 'tablet' | 'desktop';
  label?: string;
  className?: string;
  bgColor?: string;
  accentColor?: string;
}

export function ImagePlaceholder({
  type = 'web',
  label = 'App Screenshot',
  className = '',
  bgColor = 'from-gray-100 to-gray-200',
  accentColor = 'text-gray-400'
}: ImagePlaceholderProps) {

  const getAspectRatio = () => {
    switch (type) {
      case 'mobile':
        return 'aspect-[9/19.5]'; // iPhone-like ratio
      case 'tablet':
        return 'aspect-[3/4]';
      case 'desktop':
      case 'web':
        return 'aspect-[16/10]'; // Common web app ratio
      default:
        return 'aspect-video';
    }
  };

  const getDeviceFrame = () => {
    if (type === 'mobile') {
      return (
        <div className="relative h-full w-full max-w-[300px] mx-auto">
          {/* Mobile device frame */}
          <div className="absolute inset-0 rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-900 shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-2xl z-10" />
            {/* Screen content */}
            <div className={`h-full w-full rounded-[1.75rem] overflow-hidden bg-gradient-to-br ${bgColor} flex items-center justify-center`}>
              <div className="text-center p-6">
                <ImageIcon className={`h-16 w-16 mx-auto mb-4 ${accentColor}`} />
                <p className={`text-sm font-medium ${accentColor}`}>
                  {label}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Replace with actual screenshot
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Web/Desktop frame
    return (
      <div className="relative h-full w-full">
        {/* Browser chrome */}
        <div className="absolute inset-0 rounded-xl border-2 border-gray-300 bg-white shadow-2xl overflow-hidden">
          {/* Browser header */}
          <div className="h-10 bg-gray-100 border-b border-gray-300 flex items-center px-4 gap-2">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 mx-4 h-6 bg-white rounded border border-gray-300 flex items-center px-3">
              <div className="h-2 w-2 rounded-full bg-gray-300 mr-2" />
              <div className="text-xs text-gray-400">app.xchangebox.ng</div>
            </div>
          </div>
          {/* Screen content */}
          <div className={`h-[calc(100%-2.5rem)] bg-gradient-to-br ${bgColor} flex items-center justify-center`}>
            <div className="text-center p-6">
              <ImageIcon className={`h-20 w-20 mx-auto mb-4 ${accentColor}`} />
              <p className={`text-lg font-semibold ${accentColor}`}>
                {label}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Replace with actual screenshot
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${getAspectRatio()} ${className}`}
    >
      {getDeviceFrame()}
    </motion.div>
  );
}

// Multi-device showcase component
interface MultiDeviceShowcaseProps {
  mobileLabel?: string;
  webLabel?: string;
  bgColor?: string;
  accentColor?: string;
}

export function MultiDeviceShowcase({
  mobileLabel = 'Mobile App',
  webLabel = 'Web Dashboard',
  bgColor = 'from-gray-100 to-gray-200',
  accentColor = 'text-gray-400'
}: MultiDeviceShowcaseProps) {
  return (
    <div className="relative">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Mobile */}
        <ImagePlaceholder
          type="mobile"
          label={mobileLabel}
          bgColor={bgColor}
          accentColor={accentColor}
        />

        {/* Web */}
        <ImagePlaceholder
          type="web"
          label={webLabel}
          bgColor={bgColor}
          accentColor={accentColor}
        />
      </div>
    </div>
  );
}
