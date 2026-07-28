import { useState } from 'react';

export interface GridCode {
  code: string;
  isAvailable: boolean;
}

export interface MapTileData {
  title: string;
  availableSpace: string;
  codes: GridCode[];
}

const row1Tiles: MapTileData[] = [
  {
    title: 'Electronics',
    availableSpace: '20/100',
    codes: [
      { code: 'A1', isAvailable: true },
      { code: 'A2', isAvailable: true },
      { code: 'A3', isAvailable: false },
    ],
  },
  {
    title: 'Home & Kitchen',
    availableSpace: '10/100',
    codes: [
      { code: 'C1', isAvailable: true },
      { code: 'C2', isAvailable: false },
      { code: 'C3', isAvailable: false },
    ],
  },
  {
    title: 'Automotive Parts',
    availableSpace: '50/100',
    codes: [
      { code: 'D1', isAvailable: true },
      { code: 'D2', isAvailable: true },
      { code: 'D3', isAvailable: false },
    ],
  },
  {
    title: 'Sports Equipment',
    availableSpace: '45/100',
    codes: [
      { code: 'F1', isAvailable: true },
      { code: 'F2', isAvailable: true },
      { code: 'F3', isAvailable: false },
    ],
  },
];

const row2Tiles: MapTileData[] = [
  {
    title: 'Apparel',
    availableSpace: '20/100',
    codes: [
      { code: 'B1', isAvailable: true },
      { code: 'B2', isAvailable: true },
      { code: 'B3', isAvailable: true },
      { code: 'B4', isAvailable: true },
      { code: 'B5', isAvailable: true },
      { code: 'B6', isAvailable: true },
      { code: 'B7', isAvailable: false },
      { code: 'B8', isAvailable: false },
      { code: 'B9', isAvailable: false },
      { code: 'B10', isAvailable: false },
    ],
  },
  {
    title: 'Beauty & Health',
    availableSpace: '30/100',
    codes: [
      { code: 'E1', isAvailable: true },
      { code: 'E2', isAvailable: true },
      { code: 'E3', isAvailable: true },
      { code: 'E4', isAvailable: false },
    ],
  },
];

export default function WarehouseMapCard() {
  const [activeFloor, setActiveFloor] = useState('Floor 1');
  const floors = ['Floor 1', 'Floor 2', 'Floor 3'];

  return (
    <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] flex flex-col gap-[16px] border border-[#F0F0F0]/50 shadow-2xs w-full min-h-[407px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-[#333333] leading-[120%]">
          Warehouse Map
        </h2>

        {/* Floor Toggle */}
        <div className="flex items-center bg-[#F0F0F0] rounded-[8px] p-[3px]">
          {floors.map((floor) => {
            const isActive = activeFloor === floor;
            return (
              <button
                key={floor}
                onClick={() => setActiveFloor(floor)}
                className={`px-[12px] py-[4px] rounded-[6px] text-[12px] font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#333333] text-[#FEFEFE] shadow-xs'
                    : 'text-[#757575] hover:text-[#333333]'
                }`}
              >
                {floor}
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Panel (#F5F5F5) */}
      <div className="bg-[#F5F5F5] rounded-[12px] p-[16px] flex flex-col gap-[16px] flex-1">
        {/* Row 1: 4 Equal Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px]">
          {row1Tiles.map((tile, idx) => (
            <MapTile key={idx} tile={tile} />
          ))}
        </div>

        {/* Row 2: 2 Uneven Tiles (Apparel wider ~517px, Beauty & Health ~221px) */}
        <div className="flex flex-col lg:flex-row gap-[12px] flex-1">
          <div className="flex-[2]">
            <MapTile tile={row2Tiles[0]} />
          </div>
          <div className="flex-[1]">
            <MapTile tile={row2Tiles[1]} />
          </div>
        </div>

        {/* Legend Row (Bottom-Left) */}
        <div className="flex items-center gap-[16px] pt-[4px]">
          <div className="flex items-center gap-[6px]">
            <div className="w-[14px] h-[14px] rounded-[3px] bg-[#E3DDFF] border border-[#856DF3]/30" />
            <span className="text-[12px] font-semibold text-[#333333]">Available</span>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="w-[14px] h-[14px] rounded-[3px] bg-[#E0E0E0] border border-[#757575]/20" />
            <span className="text-[12px] font-semibold text-[#333333]">Full</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapTile({ tile }: { tile: MapTileData; key?: number | string }) {
  return (
    <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] flex flex-col gap-[10px] shadow-xs border border-[#F0F0F0]/60 justify-between h-full">
      {/* Title */}
      <h3 className="text-[14px] font-bold text-[#333333] leading-none">
        {tile.title}
      </h3>

      {/* Row of small 40x40 grid-code blocks */}
      <div className="flex items-center gap-[6px] flex-wrap py-[2px]">
        {tile.codes.map((item, idx) => (
          <div
            key={idx}
            className={`w-[40px] h-[40px] rounded-[6px] flex items-center justify-center transition-colors ${
              item.isAvailable ? 'bg-[#E3DDFF]' : 'bg-[#E0E0E0]'
            }`}
          >
            {/* Inner 24x24 white code chip */}
            <div
              className="w-[24px] h-[24px] bg-[#FEFEFE] rounded-[4px] flex items-center justify-center"
              style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
            >
              <span className="text-[10px] font-bold text-[#333333]">
                {item.code}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Available Space Line */}
      <div className="flex items-baseline gap-[4px] mt-[2px]">
        <span className="text-[9px] font-regular text-[#757575]">Available Space:</span>
        <span className="text-[11px] font-bold text-[#333333]">
          {tile.availableSpace.split('/')[0]}
        </span>
        <span className="text-[11px] font-regular text-[#757575]">
          /{tile.availableSpace.split('/')[1]}
        </span>
      </div>
    </div>
  );
}
