"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <section className="relative flex h-svh flex-col justify-between">
      <GL hovering={hovering} />

      <div className="relative z-10 mt-auto pb-20 text-center">
        <Pill className="mb-6">WORKFLOW AUTOMATION PARTNER</Pill>

        <h1 className="font-sentient text-5xl sm:text-6xl md:text-7xl">
          Remove manual ops <br />
          <i className="font-light">without replacing your stack</i>
        </h1>

        <p className="mx-auto mt-8 max-w-[620px] text-balance font-mono text-sm text-foreground/70 sm:text-base">
          Stanley Systems helps service businesses eliminate repetitive re-entry, reduce exception chaos, and speed up
          billing with measurable outcomes.
        </p>

        <Link className="contents max-sm:hidden" href="#contact">
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Book Workflow Audit]
          </Button>
        </Link>

        <Link className="contents sm:hidden" href="#contact">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Book Workflow Audit]
          </Button>
        </Link>
      </div>
    </section>
  );
}
