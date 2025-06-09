import prisma from '@/lib/prisma';

export async function GET(){
    const data = await prisma.customer.findMany({
        orderBy: {id: 'asc'},
    });
    return new Response(JSON.stringify(data), {status: 200});
}

export async function POST(request){
    const {kode, nama, deskripsi} = await request.json();

    if(!kode || !nama || !deskripsi){
        return new Response(JSON.stringify({error : 'Semua Field Wajib Diisi'}), {
            status: 400,
        });
    }
    const paket = await prisma.customer.create({
        data: {kode, nama, deskripsi},
    });
    return new Response(JSON.stringify(paket), {status: 201});
}

export async function PUT(request) {
    const {id, kode, nama, deskripsi} = await request.json();

    if(!id || !kode || !nama || !deskripsi) return Response.json({error: 'Field kosong'}, {
        status:400});

    const paket = await prisma.customer.update({
        where: {id},
        data: {kode, nama, deskripsi},
    });

    return Response.json(paket);
}

export async function DELETE(request) {
    const {id} = await request.json();
    if (!id) return Response.json({error: 'ID tidak ditemukan'}, {status : 400});

    await prisma.customer.delete({where: {id}});
    return Response.json({message: 'Berhasil dihapus'});
}