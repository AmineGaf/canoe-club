import { HeroSection } from '@/components/sections/HeroSection';
import { PhishTacosSection } from '@/components/sections/PhishTacosSection';
import { DailySpecialsSection } from '@/components/sections/DailySpecialsSection';
import { HappyHourSection } from '@/components/sections/HappyHourSection';
import { InstagramSection } from '@/components/sections/InstagramSection';
import { LocationSection } from '@/components/sections/LocationSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhishTacosSection />
      <DailySpecialsSection />
      <HappyHourSection />
      <InstagramSection />
      <LocationSection />
    </>
  );
}
