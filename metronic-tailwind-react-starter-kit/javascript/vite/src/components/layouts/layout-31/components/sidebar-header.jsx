import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/lib/helpers';

export function SidebarHeader() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center w-full">
        {/* Sidebar header */}
        <div className="flex w-full grow items-center justify-between px-5 gap-2.5">
          <Link to="/layout-31" className="flex items-center gap-2">
            <div
              className="
                flex items-center p-[5px]
                rounded-[6px] border border-white/30
                bg-[#000]
                bg-[radial-gradient(97.49%_97.49%_at_50%_2.51%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]
                shadow-[0_0_0_1px_#000]
              "
            >
              <img
                src={toAbsoluteUrl('/media/app/logo-35.svg')}
                alt="image"
                className="min-w-[18px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
