import React from 'react';
import { NavItem } from './NavItem';

export const Sidebar = () => (
  <nav className="space-y-4">
    <NavItem icon="□" text="Dashboard" />
    <NavItem icon="👤" text="Profile" active />
    <NavItem icon="💰" text="Pricing & Availability" />
    <NavItem icon="📊" text="Campaigns" />
    <NavItem icon="💳" text="Payment & Payouts" />
    <NavItem icon="⚙️" text="Settings" className="mt-auto" />
  </nav>
);