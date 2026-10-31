import React from 'react';
import { ArrowUpRight, Leaf, FolderGit2 } from 'lucide-react';

interface FooterProps {
  onOpenBlueprint: () => void;
  onNavigate: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'sustainability' | 'projects', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBlueprint, onNavigate, onNavigatePage }) => {
  return (
    <footer className="bg-[#16191D] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#C85A32] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                DM
              </span>
              <span className="text-xl font-bold tracking-tight text-white">DailyMate</span>
            </div>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Precision-engineered daily-use accessories: mobile stands, key holders, everyday bags, and modular desk organizers. Designed for modern hybrid workflow, tactile satisfaction, and circular longevity.
            </p>
            <div className="text-[11px] text-[#F07A4B] font-semibold">
              Aerospace 6061-T6 · Grade 5 Titanium · FSC American Walnut · 500D Cordura
            </div>
          </div>

          {/* Product Lines */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F07A4B]">Hardware Lines</div>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button
                  onClick={() => onNavigatePage('home', 'catalog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  OmniStand Pro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('home', 'catalog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  PocketFold MagStand
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('home', 'catalog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  OrbitKey Titanium Clip
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('home', 'catalog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Commute Sling 4L
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('home', 'catalog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Horizon Desk Tray Trio
                </button>
              </li>
            </ul>
          </div>

          {/* Research & Craft */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F07A4B]">Operations &amp; Research</div>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button
                  onClick={() => onNavigatePage('projects')}
                  className="hover:text-[#F07A4B] transition-colors cursor-pointer flex items-center gap-1 font-semibold text-white"
                >
                  <FolderGit2 className="w-3 h-3 text-[#F07A4B]" />
                  <span>Startup Projects (8)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('sustainability')}
                  className="hover:text-[#F07A4B] transition-colors cursor-pointer flex items-center gap-1 font-semibold text-white"
                >
                  <Leaf className="w-3 h-3 text-[#F07A4B]" />
                  <span>Sustainability Framework</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('home', 'craft')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  4-Stage Production
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('home', 'corporate')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Laser Fleet Gifting
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('home', 'bundle-builder')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Everyday Setup Builder
                </button>
              </li>
            </ul>
          </div>

          {/* Transparency & Blueprint */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F07A4B]">Architecture</div>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button
                  onClick={onOpenBlueprint}
                  className="hover:text-[#F07A4B] transition-colors flex items-center gap-1 font-semibold text-white cursor-pointer"
                >
                  <span>Sites Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F07A4B]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('home', 'contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sample Requests
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('home', 'contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Factory Location Hub
                </button>
              </li>
              <li className="text-[11px] text-white/50 pt-2">
                ISO 9001:2015 Registered Facility
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} DailyMate Inc. All rights reserved. Precision Everyday Utility.
          </div>
          <div className="flex items-center gap-6">
            <span>Plastic-Free Fulfillment</span>
            <span>·</span>
            <span>10-Year Warranty</span>
            <span>·</span>
            <button
              onClick={onOpenBlueprint}
              className="text-[#F07A4B] hover:underline cursor-pointer"
            >
              Google Sites Guide
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
