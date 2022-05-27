import { Injectable } from '@nestjs/common';
import axios from "axios";
import xmljs from "xml2js";
import { differenceInMinutes, formatDistance, parse as parseDate } from 'date-fns';
import _ from 'lodash';
import {Timetable} from "./dto/Timetable";

const BASE_URL = "https://api.deutschebahn.com/timetables/v1"


function customizer(objValue: any, srcValue: any) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

const parser = new xmljs.Parser({
  explicitRoot: false,
  mergeAttrs: true,
  explicitArray: false,
})

/**
 * Base request for the Deutsche Bahn Timetable-API
 */
export const timeTableRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Accept": "application/xml",
    "Authorization": `Bearer ${process.env.API_KEY}`
  }
})


@Injectable()
export class TimetableService {

  public timetable : Timetable;

  /**
   * Fetches the realtime data for a given station
   * @param evaNo Station EVA-number
   * @returns Promise to timetable object
   */
  async fetchRealTimeData(evaNo: string): Promise<Timetable> {
    const xml = (await timeTableRequest.get(`/fchg/${evaNo}/`)).data
    return TimetableService.timetableFromResponse(xml)
  }

  /**
   * Fetches planned data for the specified station
   * @param evaoNo Station EVA-number
   * @param date Date in format YYMMDD.
   * @param hour Hour in format HH.
   * @returns Promise to timetable object
   */
  async fetchPlannedTimeData(evaoNo: string, date: string, hour: string) {
    const xml = (await timeTableRequest.get(`/plan/${evaoNo}/${date}/${hour}/`)).data
    return TimetableService.timetableFromResponse(xml)
  }

  /**
   * Parses the XML-Response from the Deutsche Bahn API and returns a Timetable object.
   * @param xml XML-String
   * @returns Promise to timetable object
   */

  private static async timetableFromResponse(xml: string): Promise<Timetable> {
    return await parser.parseStringPromise(xml)
  }

}
