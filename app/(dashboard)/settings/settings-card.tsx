"use client";

import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const SettingsCard = () => {
  const connectedBank = null;

  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader>
        <CardTitle className="line-clamp-1 text-xl">Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <Separator />
        <div className="flex flex-col items-center gap-y-2 py-4 lg:flex-row">
          <p className="w-full text-sm font-medium lg:w-[16.5rem]">
            Bank account
          </p>
          <div className="flex w-full items-center justify-between">
            <div
              className={cn(
                "flex items-center truncate text-sm",
                !connectedBank && "text-muted-foreground",
              )}
            >
              {connectedBank
                ? "Bank account connected"
                : "No bank account connected"}
            </div>
          </div>
        </div>
        <Separator />
      </CardContent>
    </Card>
  );
};
