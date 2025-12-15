import { db } from '@/lib/mysql'



export async function getArticulos() {
    try {
        // Retardo artificial para fines demostrativos.
        // No realizar en la vida real :)
        console.log('Recuperando artículos...');
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const results = await db.query('select * from articulos');
        console.log(results);

        return results;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}


export async function getPrueba() {
    try {
        // Retardo artificial para fines demostrativos.
        // No realizar en la vida real :)
        console.log('Recuperando prueba...');
        await new Promise((resolve) => setTimeout(resolve, 3000));

        return { success: 'Este mensaje tarda 3 segundos en llegar' };
    } catch (error) {
        // console.log(error);  
        return null;
    }
}




export async function getArticulo(id) {
    try {
        // Retardo artificial para fines demostrativos.
        // No realizar en la vida real :)
        console.log('Recuperando artículo...');
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const results = await db.query('select * from articulos where id=?', [id]);
        console.log(results);

        return results[0];
    } catch (error) {
        // console.log(error);  
        return null;
    }
}
