import { WeatherData } from "@/api/types";
import { format } from "date-fns";
import { Compass, Gauge, Sunrise, Sunset } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WeatherDetailsProps {
  data: WeatherData;
}

const Weatherdetails = ({ data }: WeatherDetailsProps) => {
  const { main, wind, sys } = data;

  const getWindDirection = (degree: number) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    const index =
      Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8;
    return directions[index];
  };

  const formatTime = (timestamp: number) => {
    return format(new Date(timestamp * 1000), "hh:mm a");
  };

  const details = [
    {
      title: "Sunraise",
      value: formatTime(sys.sunrise),
      icon: Sunrise,
      color: "text-orange-500",
    },
    {
      title: "Sunset",
      value: formatTime(sys.sunset),
      icon: Sunset,
      color: "text-blue-500",
    },
    {
      title: "Wind Dirwction",
      value: `${getWindDirection(wind.deg)}(${wind.speed}°)`,
      icon: Compass,
      color: "text-green-500",
    },
    {
      title: "Pressure",
      value: `${main.pressure} hPa`,
      icon: Gauge,
      color: "text-purple-500",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {details.map((detail) => {
            return (
              <div
                key={detail.title}
                className="flex items-center gap-2 rounded-lg border p-4">
                <detail.icon className={`h-5 w-5 ${detail.color}`} />
                <div>
                  <p className="text-sm font-medium leading-none">
                    {detail.title}
                  </p>  
                  <p className="text-sm text-muted-foreground">{detail.value}</p> 
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Weatherdetails;
