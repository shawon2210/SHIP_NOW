import KpiCard from '../components/warehouse/KpiCard';
import WarehouseInventoryCard from '../components/warehouse/WarehouseInventoryCard';
import WarehouseStorageTable from '../components/warehouse/WarehouseStorageTable';
import WarehouseMapCard from '../components/warehouse/WarehouseMapCard';
import CapacityUsageCard from '../components/warehouse/CapacityUsageCard';
import PackageStatusCard from '../components/warehouse/PackageStatusCard';
import ActivityLogCard from '../components/warehouse/ActivityLogCard';

export default function Warehouse() {
  return (
    <div className="flex flex-col gap-[20px] w-full min-w-0 pt-[40px]">
      {/* Body: Left Column + Right Column */}
      <div className="flex flex-col xl:flex-row gap-[20px] w-full min-w-0">
        
        {/* Left Column (flex:1, ~818px @ 1440px desktop): stacked cards */}
        <div className="flex-1 flex flex-col gap-[20px] min-w-0">
          
          {/* Row 1 (Phase 5): Summary Cards (200px) + Warehouse Inventory (598px flex:1) */}
          <div className="flex flex-col sm:flex-row gap-[20px] w-full min-w-0">
            <div className="w-full sm:w-auto lg:w-[200px] order-1 sm:order-none shrink-0">
              <KpiCard />
            </div>
            <div className="flex-1 min-w-0 order-2 sm:order-none">
              <WarehouseInventoryCard />
            </div>
          </div>

          {/* On Mobile (<xl), insert Capacity Usage & Package Status here for priority order */}
          <div className="flex flex-col gap-[20px] xl:hidden">
            <CapacityUsageCard />
            <PackageStatusCard />
          </div>

          {/* Row 2 (Phase 6): Warehouse Storage Table */}
          <WarehouseStorageTable />

          {/* Row 3 (Phase 7): Warehouse Map */}
          <WarehouseMapCard />

          {/* On Mobile (<xl), insert Activity Log here */}
          <div className="flex flex-col gap-[20px] xl:hidden">
            <ActivityLogCard />
          </div>
        </div>

        {/* Right Column (fixed ~339px @ 1440px desktop): stacked cards on Desktop (xl:flex) */}
        <div className="hidden xl:flex xl:w-[339px] flex-col gap-[20px] shrink-0 min-w-0">
          {/* Card 1 (Phase 8): Capacity Usage */}
          <CapacityUsageCard />

          {/* Card 2 (Phase 9): Package Status */}
          <PackageStatusCard />

          {/* Card 3 (Phase 10): Warehouse Activity Log */}
          <ActivityLogCard />
        </div>

      </div>

    </div>
  );
}
