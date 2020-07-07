// 这个文件里就放和我们音乐相关的api
import request from '../utils/http'
// 定义了一个方法，这个就是获取榜单列表的方法
// 这个方法的输入和输出
// 输出应该是对应的榜单列表，因为是异步操作，所以我们可以输出一个Promise对象
export function getBillList(type, size = 6, offset = 0) {
    const url = `/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`
    return request.get(url).then(res => {
        // 可以继续统一的数据预处理
        return {
            ...res,
            list: res.song_list
        }
    })
}

// 1. 用的时候更加方便了
// 2. 维护也方便了，如果接口变了，我们只改一个地方就可以了
// 3. 我们对请求到的数据做统一的预处理

/**
 * 获取歌曲详情
 * @param songId 歌曲id
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getSongInfo(songId) {
    const url = `/api/v1/restserver/ting?method=baidu.ting.song.play&songid=${songId}`;
    return request.get(url);
}

/**
 * 获取歌词详情
 * @param lrcLink 歌词地址
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getLrc(lrcLink) {
    const url = `/taihe-api/data/song/lrc?lrc_link=${lrcLink}`
    return request.get(url);
}
