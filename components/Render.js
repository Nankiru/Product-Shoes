

export const Render = (hero) => {
  return `
    <div class="flex flex-col justify-center items-center rounded-[10px]">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <img src="${hero.image}" alt="Mountain" class="w-full h-64 object-cover hover:scale-x-105 transiton duration-500 cursor-pointer">
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">${hero.name}</h2>
            <p class="text-gray-700 leading-tight mb-4 line-clamp-2">
                ${hero.description}
            </p>
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <span class="text-gray-800 font-semibold">Position ${hero.position}</span>
                </div>
            </div>
        </div>
    </div>
</div>
  `
}

