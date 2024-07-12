import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ClockIcon } from "./icons/clock-icon";
import { PlusIcon } from "./icons/plus-icon";
import { SettingsIcon } from "./icons/settings-icon";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Alarm Clock</h1>
        <Button variant="ghost" size="icon">
          <SettingsIcon className="w-6 h-6" />
        </Button>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="grid gap-4">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>My Alarms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Wake Up</div>
                      <div className="text-muted-foreground text-sm">
                        7:00 AM, Weekdays
                      </div>
                    </div>
                  </div>
                  <Switch aria-label="Toggle alarm" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Gym Time</div>
                      <div className="text-muted-foreground text-sm">
                        6:00 PM, Weekdays
                      </div>
                    </div>
                  </div>
                  <Switch aria-label="Toggle alarm" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Bedtime</div>
                      <div className="text-muted-foreground text-sm">
                        11:00 PM, Daily
                      </div>
                    </div>
                  </div>
                  <Switch aria-label="Toggle alarm" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Add Alarm</Button>
            </CardFooter>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Shared Alarms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-muted-foreground text-sm">
                        Morning Routine
                      </div>
                    </div>
                  </div>
                  <Switch aria-label="Toggle alarm" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-muted-foreground text-sm">
                        Wake Up Call
                      </div>
                    </div>
                  </div>
                  <Switch aria-label="Toggle alarm" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground p-4 flex justify-center">
        <Button>
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Alarm
        </Button>
      </footer>
    </div>
  );
}
