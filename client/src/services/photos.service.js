import api from './api'

export async function getPhotos(params = {}) {
    const { data } = await api.get('/photos', { params })
    return data
}

export async function getPhotoById(id) {
    const { data } = await api.get(`/photos/${id}`)
    return data
}

export async function uploadPhoto(formData) {
    const { data } = await api.post('/photos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    })
    return data
}

export async function deletePhoto(id) {
    const { data } = await api.delete(`/photos/${id}`)
    return data
}
