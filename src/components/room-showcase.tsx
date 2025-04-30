import { rooms } from '@/data/rooms';
import { RoomCard } from '@/components/room-card';

export function RoomShowcase() {
  return (
    <section id="rooms" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
