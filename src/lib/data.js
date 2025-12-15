import { db } from '@/lib/mysql'

// Articulos

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

// Proveedors

export async function getProveedores() {
    try {
        // Retardo artificial para fines demostrativos.
        // No realizar en la vida real :)
        console.log('Recuperando proveedores...');
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const results = await db.query('select * from proveedores');
        console.log(results);

        return results;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}

export async function getProveedor(id) {
    try {
        // Retardo artificial para fines demostrativos.
        // No realizar en la vida real :)
        console.log('Recuperando proveedor...');
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const results = await db.query('select * from proveedores where id=?', [id]);
        console.log(results);

        return results[0];
    } catch (error) {
        // console.log(error);  
        return null;
    }
}

// Prueba

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





